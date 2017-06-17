namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveTypeIdFromTreasure : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Treasures", "TypeId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Treasures", "TypeId", c => c.Byte(nullable: false));
        }
    }
}
