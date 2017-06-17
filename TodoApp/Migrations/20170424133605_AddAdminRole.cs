using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using TodoApp.Data;

namespace TodoApp.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20170424133605_AddAdminRole")]
    public class AddAdminRole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
INSERT INTO [dbo].[AspNetRoles] (ConcurrencyStamp, Name, NormalizedName)
VALUES('B8E76E04-DCD3-42FE-A424-DFAE3579F955', 'Admin', 'ADMIN')
");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"DELETE FROM [dbo].[AspNetRoles] WHERE [NormalizedName] = 'ADMIN'");
        }
    }
}
