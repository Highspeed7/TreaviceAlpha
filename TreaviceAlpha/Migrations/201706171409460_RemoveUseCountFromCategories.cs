namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveUseCountFromCategories : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Categories", "UseCount");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Categories", "UseCount", c => c.Int(nullable: false));
        }
    }
}
