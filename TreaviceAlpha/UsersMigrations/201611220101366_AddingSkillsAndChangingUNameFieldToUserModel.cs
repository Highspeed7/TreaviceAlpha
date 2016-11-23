namespace TreaviceAlpha.UsersMigrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingSkillsAndChangingUNameFieldToUserModel : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Users", "Skill_Id", "dbo.Skills");
            DropIndex("dbo.Users", new[] { "Skill_Id" });
            CreateTable(
                "dbo.UserSkills",
                c => new
                    {
                        User_Id = c.Int(nullable: false),
                        Skill_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.User_Id, t.Skill_Id })
                .ForeignKey("dbo.Users", t => t.User_Id, cascadeDelete: true)
                .ForeignKey("dbo.Skills", t => t.Skill_Id, cascadeDelete: true)
                .Index(t => t.User_Id)
                .Index(t => t.Skill_Id);
            
            AddColumn("dbo.Users", "Email", c => c.String());
            DropColumn("dbo.Users", "Username");
            DropColumn("dbo.Users", "Skill_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "Skill_Id", c => c.Int());
            AddColumn("dbo.Users", "Username", c => c.String());
            DropForeignKey("dbo.UserSkills", "Skill_Id", "dbo.Skills");
            DropForeignKey("dbo.UserSkills", "User_Id", "dbo.Users");
            DropIndex("dbo.UserSkills", new[] { "Skill_Id" });
            DropIndex("dbo.UserSkills", new[] { "User_Id" });
            DropColumn("dbo.Users", "Email");
            DropTable("dbo.UserSkills");
            CreateIndex("dbo.Users", "Skill_Id");
            AddForeignKey("dbo.Users", "Skill_Id", "dbo.Skills", "Id");
        }
    }
}
