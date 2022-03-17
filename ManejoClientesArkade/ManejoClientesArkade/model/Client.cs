using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Manejo_De_Clientes_EF.model
{
    public class Client
    {
        [Key]
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string name { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string cellPhone { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string address { get; set; }

        [Required]
        [Column(TypeName = "varchar(1)")]
        public string gender { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string email { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        public DateTime dateBirth { get; set; }                   


    }
}

