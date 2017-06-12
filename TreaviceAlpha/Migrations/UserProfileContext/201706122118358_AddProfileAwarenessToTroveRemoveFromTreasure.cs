namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddProfileAwarenessToTroveRemoveFromTreasure : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Treasures", "Profile_Id", "dbo.Profiles");
            DropIndex("dbo.Treasures", new[] { "Profile_Id" });
            AddColumn("dbo.Troves", "ProfileId", c => c.Byte(nullable: false));
            DropColumn("dbo.Treasures", "ProfileId");
            DropColumn("dbo.Treasures", "Profile_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Treasures", "Profile_Id", c => c.Int());
            AddColumn("dbo.Treasures", "ProfileId", c => c.Byte(nullable: false));
            DropColumn("dbo.Troves", "ProfileId");
            CreateIndex("dbo.Treasures", "Profile_Id");
            AddForeignKey("dbo.Treasures", "Profile_Id", "dbo.Profiles", "Id");
        }
    }
}
