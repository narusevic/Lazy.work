using Microsoft.Extensions.Logging;
using System;
using System.IO;

namespace TodoApp.Tools
{
    public class SqlLogger: ILogger
    {
        private const string LogFilePath = @"C:\temp\todo-app-sql-log.txt";
        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            var log = string.Format("{0}{1}{1}", formatter(state, exception), Environment.NewLine);

            Directory.CreateDirectory(Path.GetDirectoryName(LogFilePath));
            File.AppendAllText(LogFilePath, log);
        }

        public IDisposable BeginScope<TState>(TState state)
        {
            return null;
        }

    }
}
