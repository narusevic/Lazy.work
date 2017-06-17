using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TodoApp.Data.Entities
{
    public class User : IdentityUser<int>
    {
        public List<Work> Works { get; set; }
    }
}