using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ManejoClientesArkade.model
{
    public class InterestRate
    {
        [Key]
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string nameInteresRate { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public float value { get; set; }
    }
}
