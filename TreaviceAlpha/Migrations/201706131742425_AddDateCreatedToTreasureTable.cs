namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDateCreatedToTreasureTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Treasures", "DateCreated", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Treasures", "DateCreated");
        }
    }
}
