using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyFirstASPNETWebapp1.Models
{

    public class GradeCalc
    {
        [Required]
        [Range(0, 100)]

        public int Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public int Group { get; set; }
        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int Exam { get; set; }
        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
    
      


