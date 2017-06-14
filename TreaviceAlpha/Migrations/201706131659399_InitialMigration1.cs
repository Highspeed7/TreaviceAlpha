namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration1 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes");
            AddForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes");
            AddForeignKey("dbo.Treasures", "TypeId", "dbo.TresureTypes", "Id", cascadeDelete: true);
        }
    }
}
