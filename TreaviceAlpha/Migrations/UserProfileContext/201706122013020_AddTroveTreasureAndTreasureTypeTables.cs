namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddTroveTreasureAndTreasureTypeTables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Troves",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Desc = c.String(),
                        Value = c.Int(nullable: false),
                        Profile_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Profiles", t => t.Profile_Id)
                .Index(t => t.Profile_Id);
            
            CreateTable(
                "dbo.Treasures",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Value = c.Int(nullable: false),
                        ProfileId = c.Byte(nullable: false),
                        ImgKey = c.String(),
                        CatId = c.Byte(nullable: false),
                        TypeId = c.Byte(nullable: false),
                        Category_Id = c.Int(),
                        Profile_Id = c.Int(),
                        Trove_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.Category_Id)
                .ForeignKey("dbo.Profiles", t => t.Profile_Id)
                .ForeignKey("dbo.TresureTypes", t => t.TypeId, cascadeDelete: true)
                .ForeignKey("dbo.Troves", t => t.Trove_Id)
                .Index(t => t.TypeId)
                .Index(t => t.Category_Id)
                .Index(t => t.Profile_Id)
                .Index(t => t.Trove_Id);
            
            CreateTable(
                "dbo.TresureTypes",
                c => new
                    {
                        Id = c.Byte(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Troves", "Profile_Id", "dbo.Profiles");
            DropForeignKey("dbo.Treasures", "Trove_Id", "dbo.Troves");
            DropForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes");
            DropForeignKey("dbo.Treasures", "Profile_Id", "dbo.Profiles");
            DropForeignKey("dbo.Treasures", "Category_Id", "dbo.Categories");
            DropIndex("dbo.Treasures", new[] { "Trove_Id" });
            DropIndex("dbo.Treasures", new[] { "Profile_Id" });
            DropIndex("dbo.Treasures", new[] { "Category_Id" });
            DropIndex("dbo.Treasures", new[] { "TypeId" });
            DropIndex("dbo.Troves", new[] { "Profile_Id" });
            DropTable("dbo.TresureTypes");
            DropTable("dbo.Treasures");
            DropTable("dbo.Troves");
        }
    }
}
