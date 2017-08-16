namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddLocationToProfileTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Profiles", "Location", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Profiles", "Location");
        }
    }
}
