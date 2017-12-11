namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AllowLocationNullsInProfileDb : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Profiles", "LocationLat", c => c.Double());
            AlterColumn("dbo.Profiles", "LocationLong", c => c.Double());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Profiles", "LocationLong", c => c.Double(nullable: false));
            AlterColumn("dbo.Profiles", "LocationLat", c => c.Double(nullable: false));
        }
    }
}
