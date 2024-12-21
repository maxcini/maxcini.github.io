---
title: Molten Salt Thermal Energy Storage
published: 2024-11-20
description: Long duration energy storage; a life line for renewable power generation.
image: "GemasolarPlant.jpg"
tags: [Energy Storage]
category: Tech
draft: false
---
The above image is of <a href="https://en.wikipedia.org/wiki/Gemasolar_Thermosolar_Plant" target="_block" rel="noopener noreferrer">Gemasolar</a>, a Concentrated Solar Power (CSP) plant with a molten salt energy storage system, located in Seville, Spain. The 75 acres of solar heliostats (mirrors) reflect sunlight to a 460 ft tower receiver. This heats the molten salt to 565 degC (1050 degF), which is then used in a steam generation system to power a turbine, generating electricity for the grid. 

Gemasolar produces 20 MW of power capacity, supplying <a href="https://www.group.sener/en/project/gemasolar-solar-thermal-power-plant/?doing_wp_cron=1732462752.8351249694824218750000" target="_block" rel="noopener noreferrer">80 GWh of energy per year</a>. This is enough to power 27,500 homes and subsequently prevent 28,000 tCO2 emissions per year!

---

## Motivation

The U.S. grid may need <a href="https://liftoff.energy.gov/long-duration-energy-storage/" target="_block">225-460 GW of Long Duration Energy Storage (LDES) capacity</a> for a net-zero economy by 2050, representing \$330B in cumulative capital requirements. Moreover, net-zero pathways that deploy LDES result in $10-20B in annualized savings in operating costs (reduced renewable curtailment/fuel spend) and avoided capital expenditures (reduced investment in dispatchable firm generation) compared to pathways that do not.

But why such large projections? 

As we build more renewable energy to clean up the grid and support growing energy demands, large scale energy storage is required to maintain grid resilience. Without energy storage, ramping of base load generation and excess renewable energy generation become significant problems, as seen in the <a href="https://www.energy.gov/eere/articles/confronting-duck-curve-how-address-over-generation-solar-energy" target="_block">duck curve.</a> Therefore, intra-day energy storage (10-36 hours) aims to achieve adequate load matching, as <a href="https://css.umich.edu/publications/factsheets/energy/us-grid-energy-storage-factsheet" target="_block">shown below:</a>

![load_matching](LoadMatching.PNG)

The business case for load matching using energy storage becomes, wait for it... 
>buy low, sell high 🤑

Additional uses of energy storage (36-160+ hours) can be used to meet multi-day needs, such as withstanding extended durations of low renewable power generation and power outages.

## Background

In 2023, the rated power of utility-scale electrical energy storage was <a href="https://css.umich.edu/publications/factsheets/energy/us-grid-energy-storage-factsheet" target="_block">39 GW in the U.S. and 178 GW globally</a>. In the U.S., solar thermal energy storage only made up for <a href="https://www.eia.gov/energyexplained/electricity/energy-storage-for-electricity-generation.php" target="_block">405 MW of power capacity across 3 plants.</a> Pumped storage hydropower is by far the most common energy storage technology, making up roughly 66% of the total <a href="https://www.iea.org/data-and-statistics/charts/global-installed-energy-storage-capacity-by-scenario-2023-and-2030" target="_block">272 GW of globally installed energy storage capacity</a> today. For electrical energy storage specifically, this number shoots up to <a href="https://css.umich.edu/publications/factsheets/energy/us-grid-energy-storage-factsheet" target="_block">90%!</a> 

Pumped hydro's popularity is due to its ability to support large energy storage capacities while being very cost effective. However, recent developments in battery technology are reducing costs, giving pumped hydro a run for its money. Utility-scale battery power capacity is on the rise faster than the latest meme stock, with <a href="https://www.eia.gov/todayinenergy/detail.php?id=63025" target="_block">5 GW added to the U.S. grid</a> just in the first half of this year alone.

<!-- - rate of discharge/dispatch - i.e. current limitations in grid ramp rate?  -->
<!-- - add another paragraph or a image to improve this section -->

## Why Molten Salt? 

So where does molten salt Thermal Energy Storage (TES) fit into this picture? First, let's look at the ideal characteristics of energy storage:
- Large energy capacity
- High energy density (i.e. small footprint)
- Easily dispatchable (i.e. can deploy energy quickly)
- High efficiency
- Low cost

<a href="https://www.eesi.org/files/FactSheet_Energy_Storage_0219.pdf" target="_block">The table below</a> comparing different LDES technologies shows that TES checks a lot of boxes; good power and storage capacity with high energy density and round trip efficiency, all while maintaining performance across a long equipment life. 

![LCOS](LDEScomparison.PNG)

Ultimately, investments come down to whether or not a business can turn a profit. Therefore, <a href="https://www.energy.gov/sites/default/files/2024-08/" target="_block">the figure below</a> compares different LDES technologies on a Levelized Cost Of Storage (LCOS) basis, which is a measure of the true cost of ownership. The <a href="https://www.energy.gov/sites/default/files/2022-09/2022%20Grid%20Energy%20Storage%20Technology%20Cost%20and%20Performance%20Assessment.pdf" target="_block">LCOS is defined as</a> the average price that a unit of energy output would need to be sold at to cover all project costs inclusive of taxes, financing, operations,  maintenance, etc. 

![LCOS](LCOScomparison.PNG)

While TES is not projected to reach the DOE's LCOS target of \$0.05/kWh by 2030 based on innovations in the pipeline, TES still remains cost competitive across the different forms of LDES today with a current LCOS at about $0.14/kWh. 

The business case for TES lies where other more cost efficient forms of energy storage are not feasible. For example, geographical limitations can prevent pumped hydro storage (lack of elevation change with sufficient reservoirs) or compressed air storage (lack of underground caverns) from being pursued. 

While the cost for batteries is expected to continue to come down, TES for high power capacity storage (1000 MW) and long durations (8+ hours) is still expected to have a <a href="https://www.energy.gov/sites/default/files/2022-09/2022%20Grid%20Energy%20Storage%20Technology%20Cost%20and%20Performance%20Assessment.pdf" target="_block">lower total installed cost by 2030</a> at about <a href="https://www.pnnl.gov/projects/esgc-cost-performance/thermal" target="_block">\$222/kWh vs the $258/kWh</a> for Li-ion LFP batteries. 

In the end, the consensus is that there is no one "holy grail" form of energy storage. We need to develop multiple forms of LDES simultaneously to fill different market needs while maintaining a diverse storage mix.

<!-- - As for batteries - why is TES better?  -->

## How it Works

Now that we can agree Thermal Energy Storage (TES) can fill a market need, let's take a look at how the system actually works. The <a href="https://elib.dlr.de/141650/1/2021%20-%20Bauer%20-%20Molten%20Salt%20Overview%20%28open%20access%29.pdf" target="_block">image below</a> shows the system broken up into 3 main units: the charging unit, the storage unit, and the discharge unit. 

![MoltenSalt](MoltenSalt.PNG)

Fluid molten salt flows from the cold storage tank through a heat exchanger, where renewable power input heats the salt from 170 degC (338 degF) to 560 degC (1040 degF). The molten salt then flows to a hot storage tank, where it can be stored until needed. Finally, the hot molten salt is pumped to a steam generator, heating water into steam, which then spins a turbine to generate electricity. Both the salt loop and the water loop then repeat the cycle for on demand power generation.

The stainless steel tanks are heavily insulated in glass foam/ceramic fiber with a refractory brick base, resulting in up to a <a href="https://www.mdpi.com/1996-1073/17/1/22#B9-energies-17-00022" target="_block">99% storage efficiency</a>. Note that majority of the efficiency losses stem from the turbine converting heat into electricity. 

![Tank](TankDesign.PNG)

A problem molten salt tanks commonly experience is <a href="https://www.nrel.gov/docs/fy24osti/89036.pdf" target="_block">failure in the tank floor</a> from 1. high initial residual stress from welding fabrication and 2. high stresses from transient operation and elevated temperature gradients. Improvements in tank design, construction, and operation are being investigated to mitigate premature failure.

Furthermore, <a href="https://elib.dlr.de/141650/1/2021%20-%20Bauer%20-%20Molten%20Salt%20Overview%20%28open%20access%29.pdf" target="_block">solar salt</a> (the working fluid) is made up of 60% sodium nitrate (NaNO3) and 40% potassium nitrate (KNO3) by weight, optimized for melting temperature, salt costs, and heat capacity. The operating temperature range of solar salt is limited to the upper bound by thermal stability (corrosiveness) and lower bound by freezing point. 

One advantage to TES is its flexibility in supporting multiple inputs and outputs. Renewable electricity can be converted to heat using a 100% efficient electric resistance heater. As seen in the intro, concentrated solar heating directly generates renewable heat. Although the majority of current molten salt systems support long duration storage for the grid, another useful output includes heat for high temperature industrial processes. 

But what happens when intermittent renewable power generation goes offline for an extended period of time? After all, Mother Nature does not always make the sun shine or the wind blow. For this scenario, back up heating is required to maintain minimum temperature to prevent the salt from solidifying, <a href="https://www.man-es.com/campaigns/download-Q4-2024/Download/molten-salt-energy-storage/46beb3bd-6b13-4ab1-ab1e-2e46ebc52492/MOSAS-Whitepaper/43DDE90B9395632ECFFA2D2D2A822453DB20F096/?cid=433c6f91-e7d9-4759-b58a-6a9202c69e77" target="_block">as depicted below</a> via renewable fuels. 

![MOSAS](MOSAS.PNG) 

<!-- - Case study? -->

## Local Impacts

The impact on local communities and the surrounding environment to thermal energy storage and associated power generation methods are not to be overlooked. 

In the event a molten salt tank were to leak, there is a relatively low impact to the environment due to the salts being <a href="https://www.sciencedirect.com/topics/earth-and-planetary-sciences/molten-salts#:~:text=Molten%20salt%20is%20a%20medium,applying%20heating%20by%20external%20sources." target="_block">nonflammable and nontoxic</a> by nature. Also, some have described Concentrated Solar Power plants as <a href="https://insideclimatenews.org/news/16012018/csp-concentrated-solar-molten-salt-storage-24-hour-renewable-energy-crescent-dunes-nevada/" target="_block">"extraterrestrial looking"</a>. I suppose this is another reason why we are building them in the middle of deserts... 

## Conclusion

Integrating molten salt storage with renewable power generation offers a zero emissions solution to meet people's power needs. 

Many existing large scale demonstrations of molten salt TES use a sensible heat, two-tank design integrated with Concentrated Solar Power. However, one of the <a href="https://www.energy.gov/sites/default/files/2023-07/Technology%20Strategy%20Assessment%20-%20Thermal%20Energy%20Storage_0.pdf" target="_block">top identified innovations to reduce TES cost</a> is to implement a latent heat, single-tank design utilizing Phase Change Materials (PCM). While a single tank would limit the continuous charge/discharge cycles, eliminating an entire tank significantly reduces cost. 

The future is bright for energy storage and renewable power generation. Molten salt thermal energy storage will likely play a role in the transition to a clean grid and decarbonizing high temperature industrial heating. 

In the words of the wise,  

> “I’d put my money on the sun and solar energy. What a source of power! I hope we don’t have to wait until oil and coal run out before we tackle that. I wish I had more years left.”
> -- <cite><a href="https://www.thomasedison.org/edison-quotes#:~:text=%E2%80%9CI'd%20put%20my%20money,I%20had%20more%20years%20left.%E2%80%9D" target="_block">Thomas Edison</a></cite>

[1]: <a href="" target="_block">https://en.wikipedia.org/wiki/Gemasolar_Thermosolar_Plant
[2]: https://www.group.sener/en/project/gemasolar-solar-thermal-power-plant/?doing_wp_cron=1732462752.8351249694824218750000
[3]: https://liftoff.energy.gov/long-duration-energy-storage/
[4]: https://www.energy.gov/eere/articles/confronting-duck-curve-how-address-over-generation-solar-energy
[5]: https://css.umich.edu/publications/factsheets/energy/us-grid-energy-storage-factsheet
[6]: https://www.eia.gov/energyexplained/electricity/energy-storage-for-electricity-generation.php
[7]: https://www.iea.org/data-and-statistics/charts/global-installed-energy-storage-capacity-by-scenario-2023-and-2030
[8]: https://www.eia.gov/todayinenergy/detail.php?id=63025
[9]: https://www.eesi.org/files/FactSheet_Energy_Storage_0219.pdf
[10]:https://www.energy.gov/sites/default/files/2024-08/Achieving%20the%20Promise%20of%20Low-Cost%20Long%20Duration%20Energy%20Storage_FINAL_08052024.pdf
[11]: https://www.energy.gov/sites/default/files/2022-09/2022%20Grid%20Energy%20Storage%20Technology%20Cost%20and%20Performance%20Assessment.pdf
[12]: https://www.pnnl.gov/projects/esgc-cost-performance/thermal
[13]: https://elib.dlr.de/141650/1/2021%20-%20Bauer%20-%20Molten%20Salt%20Overview%20%28open%20access%29.pdf
[14]: https://www.man-es.com/campaigns/download-Q4-2024/Download/molten-salt-energy-storage/46beb3bd-6b13-4ab1-ab1e-2e46ebc52492/MOSAS-Whitepaper/43DDE90B9395632ECFFA2D2D2A822453DB20F096/?cid=433c6f91-e7d9-4759-b58a-6a9202c69e77
[15]: https://www.energy.gov/sites/default/files/2023-07/Technology%20Strategy%20Assessment%20-%20Thermal%20Energy%20Storage_0.pdf

[16]: https://www.mdpi.com/1996-1073/17/1/22#B9-energies-17-00022
[17]: https://www.nrel.gov/docs/fy24osti/89036.pdf
[18]: https://insideclimatenews.org/news/16012018/csp-concentrated-solar-molten-salt-storage-24-hour-renewable-energy-crescent-dunes-nevada/
[19]: https://www.sciencedirect.com/topics/earth-and-planetary-sciences/molten-salts#:~:text=Molten%20salt%20is%20a%20medium,applying%20heating%20by%20external%20sources.

[101]: https://www.thomasedison.org/edison-quotes#:~:text=%E2%80%9CI'd%20put%20my%20money,I%20had%20more%20years%20left.%E2%80%9D

[9]: <a href="" target="_block">https://www.eesi.org/files/FactSheet_Energy_Storage_0219.pdf
[10]:<a href="" target="_block">https://www.energy.gov/sites/default/files/2024-08/Achieving%20the%20Promise%20of%20Low-Cost%20Long%20Duration%20Energy%20Storage_FINAL_08052024.pdf
[11]: <a href="https://www.energy.gov/sites/default/files/2022-09/2022%20Grid%20Energy%20Storage%20Technology%20Cost%20and%20Performance%20Assessment.pdf" target="_block">
[12]: <a href="https://www.pnnl.gov/projects/esgc-cost-performance/thermal" target="_block">
[13]: <a href="https://elib.dlr.de/141650/1/2021%20-%20Bauer%20-%20Molten%20Salt%20Overview%20%28open%20access%29.pdf" target="_block">
[14]: <a href="https://www.man-es.com/campaigns/download-Q4-2024/Download/molten-salt-energy-storage/46beb3bd-6b13-4ab1-ab1e-2e46ebc52492/MOSAS-Whitepaper/43DDE90B9395632ECFFA2D2D2A822453DB20F096/?cid=433c6f91-e7d9-4759-b58a-6a9202c69e77" target="_block">
[15]: <a href="https://www.energy.gov/sites/default/files/2023-07/Technology%20Strategy%20Assessment%20-%20Thermal%20Energy%20Storage_0.pdf" target="_block">

[16]: <a href="https://www.mdpi.com/1996-1073/17/1/22#B9-energies-17-00022" target="_block">
[17]: <a href="https://www.nrel.gov/docs/fy24osti/89036.pdf" target="_block">
[18]: <a href="https://insideclimatenews.org/news/16012018/csp-concentrated-solar-molten-salt-storage-24-hour-renewable-energy-crescent-dunes-nevada/" target="_block">
[19]: <a href="https://www.sciencedirect.com/topics/earth-and-planetary-sciences/molten-salts#:~:text=Molten%20salt%20is%20a%20medium,applying%20heating%20by%20external%20sources." target="_block">

[101]: <a href="https://www.thomasedison.org/edison-quotes#:~:text=%E2%80%9CI'd%20put%20my%20money,I%20had%20more%20years%20left.%E2%80%9D" target="_block">
