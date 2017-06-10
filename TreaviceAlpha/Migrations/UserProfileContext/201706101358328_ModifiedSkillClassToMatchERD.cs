namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModifiedSkillClassToMatchERD : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Skills", "Profile_Id", "dbo.Profiles");
            DropIndex("dbo.Skills", new[] { "Profile_Id" });
            RenameColumn(table: "dbo.Skills", name: "Profile_Id", newName: "ProfileId");
            AddColumn("dbo.Skills", "Title", c => c.String(nullable: false));
            AddColumn("dbo.Skills", "Desc", c => c.String(nullable: false));
            AddColumn("dbo.Skills", "Value", c => c.Int(nullable: false));
            AddColumn("dbo.Skills", "Negotiable", c => c.Boolean(nullable: false, defaultValue: true));
            AlterColumn("dbo.Skills", "ProfileId", c => c.Int(nullable: false));
            CreateIndex("dbo.Skills", "ProfileId");
            AddForeignKey("dbo.Skills", "ProfileId", "dbo.Profiles", "Id", cascadeDelete: true);
            DropColumn("dbo.Skills", "Name");
            DropColumn("dbo.Skills", "PointValue");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Skills", "PointValue", c => c.Int(nullable: false));
            AddColumn("dbo.Skills", "Name", c => c.String());
            DropForeignKey("dbo.Skills", "ProfileId", "dbo.Profiles");
            DropIndex("dbo.Skills", new[] { "ProfileId" });
            AlterColumn("dbo.Skills", "ProfileId", c => c.Int());
            DropColumn("dbo.Skills", "Negotiable");
            DropColumn("dbo.Skills", "Value");
            DropColumn("dbo.Skills", "Desc");
            DropColumn("dbo.Skills", "Title");
            RenameColumn(table: "dbo.Skills", name: "ProfileId", newName: "Profile_Id");
            CreateIndex("dbo.Skills", "Profile_Id");
            AddForeignKey("dbo.Skills", "Profile_Id", "dbo.Profiles", "Id");
        }
    }
}
