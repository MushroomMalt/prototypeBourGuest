﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testLogin.Models
{
    public class Floorplan
    {
        public int FloorplanID { get; set; }
        //public int restaurantID { get; set; }
        public int height { get; set; }
        public int width { get; set; }
        public int numObjects { get; set; }

        public virtual ICollection<tableObject> tableObjects { get; set; }
    }
}