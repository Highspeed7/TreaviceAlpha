namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCatIdAsForeignKeyInTreasuresTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Treasures", "Category_Id", "dbo.Categories");
            DropIndex("dbo.Treasures", new[] { "Category_Id" });
            DropColumn("dbo.Treasures", "CatId");
            RenameColumn(table: "dbo.Treasures", name: "Category_Id", newName: "CatId");
            AlterColumn("dbo.Treasures", "CatId", c => c.Int(nullable: false));
            CreateIndex("dbo.Treasures", "CatId");
            AddForeignKey("dbo.Treasures", "CatId", "dbo.Categories", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Treasures", "CatId", "dbo.Categories");
            DropIndex("dbo.Treasures", new[] { "CatId" });
            AlterColumn("dbo.Treasures", "CatId", c => c.Int());
            RenameColumn(table: "dbo.Treasures", name: "CatId", newName: "Category_Id");
            AddColumn("dbo.Treasures", "CatId", c => c.Int(nullable: false));
            CreateIndex("dbo.Treasures", "Category_Id");
            AddForeignKey("dbo.Treasures", "Category_Id", "dbo.Categories", "Id");
        }
    }
}
