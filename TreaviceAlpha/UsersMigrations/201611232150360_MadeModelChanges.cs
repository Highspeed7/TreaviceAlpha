namespace TreaviceAlpha.UsersMigrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MadeModelChanges : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Users", "Email", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Users", "Email", c => c.String());
        }
    }
}
