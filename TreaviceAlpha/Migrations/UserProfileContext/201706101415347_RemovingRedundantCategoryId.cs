namespace TreaviceAlpha.Migrations.UserProfileContext
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovingRedundantCategoryId : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Skills", "CategoryId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Skills", "CategoryId", c => c.Byte(nullable: false));
        }
    }
}
