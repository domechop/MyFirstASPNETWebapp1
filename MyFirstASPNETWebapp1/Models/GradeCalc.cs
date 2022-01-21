using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyFirstASPNETWebapp1.Models
{

    public class GradeCalc
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Value for {0} must be between {1} and {2}.")]

        public int Assignments { get; set; }
        
        public int Group { get; set; }
       
        public int Quizzes { get; set; }
        
        public int Exam { get; set; }
        
        public int Intex { get; set; }

    }
}
    
      


