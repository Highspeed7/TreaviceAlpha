namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TreasureTypeToEnumList : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes");
            DropIndex("dbo.Treasures", new[] { "TypeId" });
            AddColumn("dbo.Treasures", "Type", c => c.Int(nullable: false));
            DropTable("dbo.TresureTypes");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.TresureTypes",
                c => new
                    {
                        Id = c.Byte(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropColumn("dbo.Treasures", "Type");
            CreateIndex("dbo.Treasures", "TypeId");
            AddForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes", "Id");
        }
    }
}
