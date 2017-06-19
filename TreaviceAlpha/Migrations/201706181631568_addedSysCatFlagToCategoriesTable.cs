namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedSysCatFlagToCategoriesTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "isSystemCat", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Categories", "isSystemCat");
        }
    }
}
