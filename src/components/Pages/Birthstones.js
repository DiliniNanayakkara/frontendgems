import { React, useEffect, useState } from "react";
import january from "../Images/january.jpg";
import February from "../Images/February.jpg";
import March from "../Images/March.jpg";
import April from "../Images/April.jpg";
import May from "../Images/May.jpg";
import June from "../Images/June.jpg";
import July from "../Images/July.jpg";
import August from "../Images/August.jpg";
import september from "../Images/september.jpg";
import october from "../Images/october.jpg";
import November from "../Images/November.jpg";
import December from "../Images/December.jpg";
import "../Pages/birthstone.css";
function Birthstones() {
  return (
    <div>
      <div className="wrapper">
        <section class="birthstonepage pt-5 px-5">
          <h2 className="birthstoneh">Mahenge Spinel - 3.32 carats</h2>
          <div class="container">
            <div class="row p-5 justify-content-md-center">
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">January</h3>
                  <img className="birthstoneimg" src={january} />
                  <hr />
                  <p className="gemnameb">Ganete</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">February</h3>
                  <img className="birthstoneimg" src={February} />
                  <hr />
                  <p className="gemnameb">Amethyst</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">March</h3>
                  <img className="birthstoneimg" src={March} />
                  <hr />

                  <p className="gemnameb">Aquamarine</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">April</h3>
                  <img className="birthstoneimg" src={April} />
                  <hr />
                  <p className="gemnameb">Diamond</p>
                </div>
              </div>

              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">May</h3>
                  <img className="birthstoneimg" src={May} />
                  <hr />
                  <p className="gemnameb">Emerald</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">June</h3>
                  <img className="birthstoneimg" src={June} />
                  <hr />
                  <p className="gemnameb">Moonstone pearl</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">July</h3>
                  <img className="birthstoneimg" src={July} />
                  <hr />
                  <p className="gemnameb">Ruby</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">August</h3>
                  <img className="birthstoneimg" src={August} />
                  <hr />
                  <p className="gemnameb">Peridot,Spinel</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">September</h3>
                  <img className="birthstoneimg" src={september} />
                  <hr />
                  <p className="gemnameb">Sapphire</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">October</h3>
                  <img className="birthstoneimg" src={october} />
                  <hr />
                  <p className="gemnameb">Opal,Tourmaline</p>
                </div>
              </div>
              <div class="birth-stonesc col-3">
                <div class="birth-stones">
                  <h3 className="monthname py-3">November</h3>
                  <img className="birthstoneimg" src={November} />
                  <hr />
                  <p className="gemnameb">Citrine, Topaz</p>
                </div>
              </div>
              <div class="birth-stonesc col-3 ">
                <div class="birth-stones">
                  <h3 className="monthname py-3">December</h3>
                  <img className="birthstoneimg" src={December} />
                  <hr />
                  <p className="gemnameb">Tanzanite, Blue Zircon, Turquoise</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row px-5">
          <section className="birthstone-p">
            <p className="birthstone-p-p">
              Scholars trace the origin of birthstones back to the Breastplate
              of Aaron described in the Bible in the book of Exodus. The
              Breastplate was a religious garment set with twelve gemstones that
              represented the twelve tribes of Israel. The gems were set in four
              rows of three: sardius, topaz and carbuncle; emerald, sapphire and
              diamond; ligure, agate and amethyst; and beryl, onyx and jasper.
            </p>
            <p className="birthstone-p-p">
              But it's not obvious how we moved from gemstones representing the
              twelve tribes of Israel to birthstones. In fact the connection
              began through astrological speculation. The writings of Flavius
              Josephus (1st century AD) and St. Jerome (fifth century AD) were
              the first to make the connection between the twelve stones in the
              Breastplate and the twelve signs of the zodiac. The idea was
              proposed that each of the gemstones had special powers associated
              with the corresponding astrological sign, and that wearing these
              stones at the right time would have therapeutic or talismanic
              benefits.
            </p>
            <p className="birthstone-p-p">
              But this was not quite the same idea as our concept of the
              birthstone. Based on this astrological model, one ought to own a
              collection of the twelve different gemstones assigned to the signs
              of the zodiac, and wear the appropriate gem during the ascendancy
              of the corresponding sign. This is more like the Vedic
              astrological tradition of India, which assigns nine different
              gemstones to nine planets, and prescribes the wearing of
              particular gems according to your health and the challenges you
              face in your life.
            </p>
            <p className="birthstone-p-p">
              The idea of each person always wearing a gemstone corresponding to
              the month of his or her birth is a distinctly modern idea that
              scholars trace to 18th century Poland, with the arrival of Jewish
              gem traders in the region. But the modern list of birthstones was
              not defined until 1912, by the National Association of Jewelers
              (Jewelers of America) in the USA.
            </p>
            <p className="birthstone-p-p">
              The modern birthstone list has been unchanged since 1912. Only
              recently have we seen two attempts to change it, both curiously
              associated with the gemstone tanzanite. In 2002 the American Gem
              Trade Association (AGTA) announced that they had added tanzanite
              as a birthstone for December, though December already had two
              birthstones (turquoise and zircon). The Jewelers of America went
              along with the idea and provided this sound bite for the AGTA
              press releases: "JA sees the addition of tanzanite for December as
              a way to build business. Any step that helps retailers sell more
              jewelry is a good one." The world had clearly come a long way from
              the purported magical powers of astrological gemstones.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Birthstones;
