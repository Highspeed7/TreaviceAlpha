namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DatabaseChanges : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Profiles", "Id", "dbo.Users");
            DropForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles");
            DropForeignKey("dbo.Wants", "Profile_Id", "dbo.Profiles");
            AlterColumn("dbo.Profiles", "Id", c => c.Int(nullable: false, identity: true));
            AddForeignKey("dbo.Profiles", "UserId", "dbo.Users", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Wants", "Profile_Id", "dbo.Profiles", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Wants", "Profile_Id", "dbo.Profiles");
            DropForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles");
            DropForeignKey("dbo.Profiles", "UserId", "dbo.Users");
            AlterColumn("dbo.Profiles", "Id", c => c.Int(nullable: false));
            AddForeignKey("dbo.Wants", "Profile_Id", "dbo.Profiles", "Id");
            AddForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Profiles", "Id", "dbo.Users", "Id");
        }
    }
}
