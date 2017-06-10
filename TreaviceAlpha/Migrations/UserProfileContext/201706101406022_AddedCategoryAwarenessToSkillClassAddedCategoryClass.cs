namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedCategoryAwarenessToSkillClassAddedCategoryClass : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        UseCount = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Skills", "Category_Id", c => c.Int());
            CreateIndex("dbo.Skills", "Category_Id");
            AddForeignKey("dbo.Skills", "Category_Id", "dbo.Categories", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Skills", "Category_Id", "dbo.Categories");
            DropIndex("dbo.Skills", new[] { "Category_Id" });
            DropColumn("dbo.Skills", "Category_Id");
            DropTable("dbo.Categories");
        }
    }
}
