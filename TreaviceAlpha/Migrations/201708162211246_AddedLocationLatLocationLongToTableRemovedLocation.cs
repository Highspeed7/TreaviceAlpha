namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedLocationLatLocationLongToTableRemovedLocation : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Profiles", "LocationLat", c => c.Double(nullable: false));
            AddColumn("dbo.Profiles", "LocationLong", c => c.Double(nullable: false));
            DropColumn("dbo.Profiles", "Location");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Profiles", "Location", c => c.Double(nullable: false));
            DropColumn("dbo.Profiles", "LocationLong");
            DropColumn("dbo.Profiles", "LocationLat");
        }
    }
}
