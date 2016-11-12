namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialModels : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Skills", "User_Id", "dbo.Users");
            DropIndex("dbo.Skills", new[] { "User_Id" });
            DropTable("dbo.Users");
            DropTable("dbo.Skills");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Skills",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CategoryId = c.Byte(nullable: false),
                        PointValue = c.Int(nullable: false),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        UserName = c.String(),
                        Password = c.String(),
                        Address = c.String(),
                        PhoneNumber = c.String(),
                        Email = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.Skills", "User_Id");
            AddForeignKey("dbo.Skills", "User_Id", "dbo.Users", "Id");
        }
    }
}
