namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRequiredToCertainTroveProperties : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Troves", "Title", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Troves", "Title", c => c.String());
        }
    }
}
