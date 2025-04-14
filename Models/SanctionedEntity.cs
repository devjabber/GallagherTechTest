using System.ComponentModel.DataAnnotations;

namespace ajgre_technical_interview.Models
{
    public class SanctionedEntity
    {
        public Guid Id => Guid.NewGuid();
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public string Domicile { get; set; } = string.Empty;
        [Required]
        public bool Accepted { get; set; }
    }
}
