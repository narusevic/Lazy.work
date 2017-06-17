using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;

namespace TodoApp.Tools
{
    // NOTE: read more on https://docs.microsoft.com/en-us/ef/core/miscellaneous/logging
    public class SqlLoggerProvider : ILoggerProvider
    {
        public ILogger CreateLogger(string categoryName)
        {
            if (categoryName == typeof(IRelationalCommandBuilderFactory).FullName)
            {
                return new SqlLogger();
            }

            return new NullLogger();
        }

        public void Dispose()
        {
        }
    }

}
