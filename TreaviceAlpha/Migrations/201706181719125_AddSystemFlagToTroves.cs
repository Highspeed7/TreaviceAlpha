namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddSystemFlagToTroves : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Troves", "IsSystem", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Troves", "IsSystem");
        }
    }
}
