namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddTroveTreasureResourceTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Treasures", "Trove_Id", "dbo.Troves");
            DropIndex("dbo.Treasures", new[] { "Trove_Id" });
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
            
            DropColumn("dbo.Treasures", "Trove_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Treasures", "Trove_Id", c => c.Int());
            DropForeignKey("dbo.TroveXTreasure", "TreasureId", "dbo.Treasures");
            DropForeignKey("dbo.TroveXTreasure", "TroveId", "dbo.Troves");
            DropIndex("dbo.TroveXTreasure", new[] { "TreasureId" });
            DropIndex("dbo.TroveXTreasure", new[] { "TroveId" });
            DropTable("dbo.TroveXTreasure");
            CreateIndex("dbo.Treasures", "Trove_Id");
            AddForeignKey("dbo.Treasures", "Trove_Id", "dbo.Troves", "Id");
        }
    }
}
