namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddLoginLatAndLongToProfileTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Profiles", "LoginLat", c => c.Double());
            AddColumn("dbo.Profiles", "LoginLong", c => c.Double());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Profiles", "LoginLong");
            DropColumn("dbo.Profiles", "LoginLat");
        }
    }
}
