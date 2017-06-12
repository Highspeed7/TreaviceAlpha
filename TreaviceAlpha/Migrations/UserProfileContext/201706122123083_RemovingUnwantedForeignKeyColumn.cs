namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovingUnwantedForeignKeyColumn : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Troves", "Profile_Id", "dbo.Profiles");
            DropIndex("dbo.Troves", new[] { "Profile_Id" });
            DropColumn("dbo.Troves", "ProfileId");
            RenameColumn(table: "dbo.Troves", name: "Profile_Id", newName: "ProfileId");
            AlterColumn("dbo.Troves", "ProfileId", c => c.Int(nullable: false));
            AlterColumn("dbo.Troves", "ProfileId", c => c.Int(nullable: false));
            CreateIndex("dbo.Troves", "ProfileId");
            AddForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles");
            DropIndex("dbo.Troves", new[] { "ProfileId" });
            AlterColumn("dbo.Troves", "ProfileId", c => c.Int());
            AlterColumn("dbo.Troves", "ProfileId", c => c.Byte(nullable: false));
            RenameColumn(table: "dbo.Troves", name: "ProfileId", newName: "Profile_Id");
            AddColumn("dbo.Troves", "ProfileId", c => c.Byte(nullable: false));
            CreateIndex("dbo.Troves", "Profile_Id");
            AddForeignKey("dbo.Troves", "Profile_Id", "dbo.Profiles", "Id");
        }
    }
}
