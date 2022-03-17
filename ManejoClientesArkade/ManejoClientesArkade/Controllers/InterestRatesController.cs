#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManejoClientesArkade.model;

namespace ManejoClientesArkade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InterestRatesController : ControllerBase
    {
        private readonly ManejoInterestRateArkadeContext _context;

        public InterestRatesController(ManejoInterestRateArkadeContext context)
        {
            _context = context;
        }

        // GET: api/InterestRates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InterestRate>>> GetInterestRate()
        {
            return await _context.InterestRate.ToListAsync();
        }

        // GET: api/InterestRates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InterestRate>> GetInterestRate(string id)
        {
            var interestRate = await _context.InterestRate.FindAsync(id);

            if (interestRate == null)
            {
                return NotFound();
            }

            return interestRate;
        }

        // PUT: api/InterestRates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInterestRate(string id, InterestRate interestRate)
        {
            if (id != interestRate.nameInteresRate)
            {
                return BadRequest();
            }

            _context.Entry(interestRate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InterestRateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/InterestRates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InterestRate>> PostInterestRate(InterestRate interestRate)
        {
            _context.InterestRate.Add(interestRate);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (InterestRateExists(interestRate.nameInteresRate))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetInterestRate", new { id = interestRate.nameInteresRate }, interestRate);
        }

        // DELETE: api/InterestRates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInterestRate(string id)
        {
            var interestRate = await _context.InterestRate.FindAsync(id);
            if (interestRate == null)
            {
                return NotFound();
            }

            _context.InterestRate.Remove(interestRate);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InterestRateExists(string id)
        {
            return _context.InterestRate.Any(e => e.nameInteresRate == id);
        }
    }
}
