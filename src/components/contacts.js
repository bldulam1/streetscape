export let contacts = 'Daniel Danch <daniel.danch@veoneer.com>; Sebastian Franz <sebastian.franz@veoneer.com>; Isaac Alonso-Fernandez <isaac.alonso-fernandez@veoneer.com>; Sandeep Pandey <sandeep.pandey@veoneer.com>; Maruthi Nanjegowda <maruthi.nanjegowda@veoneer.com>; Siddaramu Shankar <siddaramu.shankar@veoneer.com>; Anupama Marigowda <anupama.marigowda@veoneer.com>; Ravi Soni <ravi.soni@veoneer.com>; Bhanu Prasad <bhanu.prasad.external@veoneer.com>; Aniket Kumar <aniket.kumar.external@veoneer.com>; Praveena Balakrishna <praveena.balakrishna@veoneer.com>; Martin Dahl <martin.dahl@veoneer.com>; Ludwig Ring <ludwig.ring@veoneer.com>; Dimitrios Felekidis <dimitrios.felekidis@veoneer.com>; Linus Blomquist <linus.blomquist.external@veoneer.com>; Robert Wingren <robert.wingren@veoneer.com>; Christopher Burdett <christopher.burdett@veoneer.com>; Rafael Trailescu <rafael.trailescu@veoneer.com>; Nalini Lokanadham <nalini.lokanadham.external@veoneer.com>; Brendon Dulam <brendon.dulam@veoneer.com>'
  .split(';')
  .map(info => {
    const ind = info.indexOf('<')
    return {
      email: info.slice(ind + 1, info.length - 1),
      name: info.slice(0, ind),
    }
  })
