namespace TreaviceAlpha.UsersMigrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UsersModelChange : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.UserSkills", "User_Id", "dbo.Users");
            DropForeignKey("dbo.UserSkills", "Skill_Id", "dbo.Skills");
            DropIndex("dbo.UserSkills", new[] { "User_Id" });
            DropIndex("dbo.UserSkills", new[] { "Skill_Id" });
            AddColumn("dbo.Users", "Skill_Id", c => c.Int());
            CreateIndex("dbo.Users", "Skill_Id");
            AddForeignKey("dbo.Users", "Skill_Id", "dbo.Skills", "Id");
            DropColumn("dbo.Users", "FirstName");
            DropColumn("dbo.Users", "LastName");
            DropColumn("dbo.Users", "Address");
            DropColumn("dbo.Users", "PhoneNumber");
            DropColumn("dbo.Users", "Email");
            DropTable("dbo.UserSkills");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.UserSkills",
                c => new
                    {
                        User_Id = c.Int(nullable: false),
                        Skill_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.User_Id, t.Skill_Id });
            
            AddColumn("dbo.Users", "Email", c => c.String());
            AddColumn("dbo.Users", "PhoneNumber", c => c.String());
            AddColumn("dbo.Users", "Address", c => c.String());
            AddColumn("dbo.Users", "LastName", c => c.String());
            AddColumn("dbo.Users", "FirstName", c => c.String());
            DropForeignKey("dbo.Users", "Skill_Id", "dbo.Skills");
            DropIndex("dbo.Users", new[] { "Skill_Id" });
            DropColumn("dbo.Users", "Skill_Id");
            CreateIndex("dbo.UserSkills", "Skill_Id");
            CreateIndex("dbo.UserSkills", "User_Id");
            AddForeignKey("dbo.UserSkills", "Skill_Id", "dbo.Skills", "Id", cascadeDelete: true);
            AddForeignKey("dbo.UserSkills", "User_Id", "dbo.Users", "Id", cascadeDelete: true);
        }
    }
}
