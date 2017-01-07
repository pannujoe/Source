using System;
using System.Collections.Generic;
using System.Linq;
using System.Speech.Synthesis;
using System.Text;
using System.Threading.Tasks;

namespace Grades
{
    class Program
    {
        static void Main(string[] args)
        {
          

            GradeBook book = new GradeBook();
            book.AddGrade(91);
            book.AddGrade(8.5f);
            book.AddGrade(98);
            book.AddGrade(80.5f);
            book.AddGrade(71);
            book.AddGrade(99.5f);
            book.AddGrade(41);
            book.AddGrade(79.5f);
            book.AddGrade(51);
            book.AddGrade(29.5f);

            GradeStatistics stats = book.ComputeStatistics();

            Console.WriteLine("Average Grade: " + stats.AverageGrade);
            Console.WriteLine("Highest Grade: " + stats.HighestGrade);
            Console.WriteLine("Lowest Grade: " + stats.LowestGrade);

            SpeechSynthesizer synth = new SpeechSynthesizer();
            synth.Speak("Hello...Namta ! Students Average Grade is" +  stats.AverageGrade + "and Students HighestGrade Grade is" + stats.HighestGrade + "and Students lowest Grade is" + stats.LowestGrade);
        }
    }
}
