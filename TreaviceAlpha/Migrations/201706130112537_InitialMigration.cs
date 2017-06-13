namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        UseCount = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Treasures",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 150),
                        Value = c.Int(nullable: false),
                        ImgKey = c.String(),
                        CatId = c.Int(nullable: false),
                        TypeId = c.Byte(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.TresureTypes", t => t.TypeId, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.CatId, cascadeDelete: true)
                .Index(t => t.CatId)
                .Index(t => t.TypeId);
            
            CreateTable(
                "dbo.Troves",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false, maxLength: 150),
                        Desc = c.String(maxLength: 1000),
                        Value = c.Int(nullable: false),
                        ProfileId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Profiles", t => t.ProfileId, cascadeDelete: true)
                .Index(t => t.ProfileId);
            
            CreateTable(
                "dbo.Profiles",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Street = c.String(),
                        City = c.String(),
                        State = c.String(),
                        ZipCode = c.String(),
                        Phone = c.String(),
                        UserId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Id)
                .Index(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Email = c.String(nullable: false),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Wants",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Profile_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Profiles", t => t.Profile_Id)
                .Index(t => t.Profile_Id);
            
            CreateTable(
                "dbo.TresureTypes",
                c => new
                    {
                        Id = c.Byte(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TroveXTreasure",
                c => new
                    {
                        TroveId = c.Int(nullable: false),
                        TreasureId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.TroveId, t.TreasureId })
                .ForeignKey("dbo.Troves", t => t.TroveId, cascadeDelete: true)
                .ForeignKey("dbo.Treasures", t => t.TreasureId, cascadeDelete: true)
                .Index(t => t.TroveId)
                .Index(t => t.TreasureId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Treasures", "CatId", "dbo.Categories");
            DropForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes");
            DropForeignKey("dbo.TroveXTreasure", "TreasureId", "dbo.Treasures");
            DropForeignKey("dbo.TroveXTreasure", "TroveId", "dbo.Troves");
            DropForeignKey("dbo.Wants", "Profile_Id", "dbo.Profiles");
            DropForeignKey("dbo.Profiles", "Id", "dbo.Users");
            DropForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles");
            DropIndex("dbo.TroveXTreasure", new[] { "TreasureId" });
            DropIndex("dbo.TroveXTreasure", new[] { "TroveId" });
            DropIndex("dbo.Wants", new[] { "Profile_Id" });
            DropIndex("dbo.Profiles", new[] { "Id" });
            DropIndex("dbo.Troves", new[] { "ProfileId" });
            DropIndex("dbo.Treasures", new[] { "TypeId" });
            DropIndex("dbo.Treasures", new[] { "CatId" });
            DropTable("dbo.TroveXTreasure");
            DropTable("dbo.TresureTypes");
            DropTable("dbo.Wants");
            DropTable("dbo.Users");
            DropTable("dbo.Profiles");
            DropTable("dbo.Troves");
            DropTable("dbo.Treasures");
            DropTable("dbo.Categories");
        }
    }
}
