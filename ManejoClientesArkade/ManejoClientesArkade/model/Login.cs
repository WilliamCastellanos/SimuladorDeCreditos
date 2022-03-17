using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Manejo_De_Clientes_EF.model
{
    public class Login
    {
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string id_client { get; set; }

        [Key]
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string nickName { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string username { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string perfil { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")]
        public string state { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string password { get; set; }
    }
}
