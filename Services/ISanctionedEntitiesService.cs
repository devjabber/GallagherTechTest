using ajgre_technical_interview.Models;

namespace ajgre_technical_interview.Services
{
    public interface ISanctionedEntitiesService
    {
        Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync();

        Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id);

        Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity);
    }
}