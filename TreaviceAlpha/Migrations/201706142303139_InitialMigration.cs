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
                        Title = c.String(),
                        Value = c.Int(nullable: false),
                        ImgKey = c.String(),
                        CatId = c.Int(nullable: false),
                        TypeId = c.Byte(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.CatId, cascadeDelete: true)
                .ForeignKey("dbo.TresureTypes", t => t.TypeId)
                .Index(t => t.CatId)
                .Index(t => t.TypeId);
            
            CreateTable(
                "dbo.Troves",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Desc = c.String(),
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
                "dbo.TroveTreasures",
                c => new
                    {
                        Trove_Id = c.Int(nullable: false),
                        Treasure_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Trove_Id, t.Treasure_Id })
                .ForeignKey("dbo.Troves", t => t.Trove_Id, cascadeDelete: true)
                .ForeignKey("dbo.Treasures", t => t.Treasure_Id, cascadeDelete: true)
                .Index(t => t.Trove_Id)
                .Index(t => t.Treasure_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes");
            DropForeignKey("dbo.TroveTreasures", "Treasure_Id", "dbo.Treasures");
            DropForeignKey("dbo.TroveTreasures", "Trove_Id", "dbo.Troves");
            DropForeignKey("dbo.Wants", "Profile_Id", "dbo.Profiles");
            DropForeignKey("dbo.Profiles", "Id", "dbo.Users");
            DropForeignKey("dbo.Troves", "ProfileId", "dbo.Profiles");
            DropForeignKey("dbo.Treasures", "CatId", "dbo.Categories");
            DropIndex("dbo.TroveTreasures", new[] { "Treasure_Id" });
            DropIndex("dbo.TroveTreasures", new[] { "Trove_Id" });
            DropIndex("dbo.Wants", new[] { "Profile_Id" });
            DropIndex("dbo.Profiles", new[] { "Id" });
            DropIndex("dbo.Troves", new[] { "ProfileId" });
            DropIndex("dbo.Treasures", new[] { "TypeId" });
            DropIndex("dbo.Treasures", new[] { "CatId" });
            DropTable("dbo.TroveTreasures");
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
