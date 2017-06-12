namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteSkillAndItemTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Items", "Profile_Id", "dbo.Profiles");
            DropForeignKey("dbo.Skills", "Category_Id", "dbo.Categories");
            DropForeignKey("dbo.Skills", "ProfileId", "dbo.Profiles");
            DropIndex("dbo.Items", new[] { "Profile_Id" });
            DropIndex("dbo.Skills", new[] { "ProfileId" });
            DropIndex("dbo.Skills", new[] { "Category_Id" });
            DropTable("dbo.Items");
            DropTable("dbo.Skills");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Skills",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        Desc = c.String(nullable: false),
                        Value = c.Int(nullable: false),
                        Negotiable = c.Boolean(nullable: false),
                        ProfileId = c.Int(nullable: false),
                        Category_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Profile_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.Skills", "Category_Id");
            CreateIndex("dbo.Skills", "ProfileId");
            CreateIndex("dbo.Items", "Profile_Id");
            AddForeignKey("dbo.Skills", "ProfileId", "dbo.Profiles", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Skills", "Category_Id", "dbo.Categories", "Id");
            AddForeignKey("dbo.Items", "Profile_Id", "dbo.Profiles", "Id");
        }
    }
}
