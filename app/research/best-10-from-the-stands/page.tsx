import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best 10 Soccer Players I've Seen from the Stands | Owen Burke",
  description:
    "Notes from seven European matches in 2024–2025. Rules, context, and a countdown from 10 to 1.",
};

export default function Best10FromTheStands() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="The Best 10 Soccer Players I've Seen from the Stands"
        subtitle="A personal list based on live matches attended in 2024–2025"
      />

      {/* Meta */}
      <section className="card p-6">
        <p className="text-sm text-gray-600">
          Date: 1/28/2026 · Author: Owen Burke
        </p>
      </section>

      {/* Rules */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Rules</h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>I've watched every player on this list in person.</li>
          <li>Each player performed well and stood out on the pitch.</li>
          <li>
            Consistency matters, but a single performance can carry a lot of
            weight.
          </li>
          <li>
            Evaluations are primarily the eye test and on‑field impact I saw,
            not analytics or reputation.
          </li>
          <li>Reputation was ignored to the best of my ability.</li>
          <li>Maximum of two players per team.</li>
          <li>This is my personal opinion based on my live experiences.</li>
        </ol>
      </section>

      {/* Matches attended */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Matches I attended (2024–2025)</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Mar 2, 2024: Valencia vs Real Madrid — La Liga</li>
          <li>Feb 2, 2025: Fiorentina vs Genoa — Serie A</li>
          <li>Feb 16, 2025: Fiorentina vs Como — Serie A</li>
          <li>Mar 9, 2025: Empoli vs Roma — Serie A</li>
          <li>Mar 16, 2025: Fiorentina vs Juventus — Serie A</li>
          <li>Mar 20, 2025: Italy vs Germany — UEFA Nations League QF (Leg 1)</li>
          <li>May 8, 2025: Fiorentina vs Real Betis — UEFA Conference League SF (Leg 2)</li>
        </ul>
      </section>

      {/* Countdown sections */}
      <section className="card p-6 space-y-6">
        <h2 className="text-xl font-semibold">Top 10</h2>
        <div className="space-y-6 text-gray-700">
          {[
            { n: 10, name: "Robin Gosens (Fiorentina)" },
            { n: 9, name: "Nico Paz (Como)" },
            { n: 8, name: "Antony (Real Betis)" },
            { n: 7, name: "Isco (Real Betis)" },
            { n: 6, name: "Kouadio Manu Kone (Roma)" },
            { n: 5, name: "Jamal Musiala (Germany)" },
            { n: 4, name: "Nicolo Barella (Italy)" },
            { n: 3, name: "Sandro Tonali (Italy)" },
            { n: 2, name: "Vinicius Jr. (Real Madrid)" },
            { n: 1, name: "Joshua Kimmich (Germany)" },
          ].map((p) => (
            <div key={p.n} className="space-y-2">
              <h3 className="text-lg font-semibold">
                {p.n}. {p.name}
              </h3>
              {p.n === 10 ? (
                <>
                  <p className="text-gray-700">
                    This guy is a goal machine from left back. I've seen him play four times for
                    Fiorentina, and he's tallied 3 goals and 1 assist. I just couldn't leave him off
                    the list. You can't argue with goals, especially from a left back!
                  </p>
                  <p className="text-gray-700">
                    He also scored two class goals against Real Betis in the UEFA Conference League
                    Semifinal (Leg 2), although he was playing as a left winger in that match.
                  </p>
                  <p className="text-gray-700">
                    Beyond his goal-scoring ability, Gosens has great fitness levels and covers a
                    lot of ground for Fiorentina on the left flank. He's one of those players who
                    always seems to get his head on the ball and be dangerous in the box. He puts in
                    excellent crosses from the left and is also a solid 1v1 defender.
                  </p>
                </>
              ) : p.n === 9 ? (
                <>
                  <p className="text-gray-700">
                    Going into the Fiorentina vs Como match, I was expecting big things from Nico Paz,
                    and he did not disappoint. He's smooth on the ball and a very intelligent player.
                    He played as a false nine in this game, and his movement and first touch stood out
                    the most to me.
                  </p>
                  <p className="text-gray-700">
                    Paz is a natural number 10 and was only 20 years old at the time, yet he played
                    very maturely even out of position. His first touch allows him to turn and get
                    forward consistently, and he really facilitates everything going forward for this
                    Como side.
                  </p>
                  <p className="text-gray-700">
                    Paz has continued to dominate Serie A as a 21 year old. As of now, Nico has scored
                    8 and assisted 6 through 22 Serie A matches in the 2025/2026 campaign. He's led
                    Como to a very impressive 6th place position in the Serie A table.
                  </p>
                </>
              ) : p.n === 8 ? (
                <>
                  <p className="text-gray-700">
                    Antony's name has been damaged by his flop at Manchester United, but he's still a
                    top-quality winger. What stands out most is his quickness. Defenders know he wants
                    to cut onto his left foot, yet he still does it at a very high success rate.
                  </p>
                  <p className="text-gray-700">
                    Antony revived his career with a successful loan spell at Real Betis in 2025. When
                    I saw Antony play in the UEFA Conference League semifinal, I was very impressed with
                    his end product. He scored a beautiful goal and provided the assist to send Real Betis
                    through to the final.
                  </p>
                  <p className="text-gray-700">
                    Antony has continued his strong form in the 2025/2026 campaign and is now permanently
                    signed to Real Betis.
                  </p>
                </>
              ) : p.n === 7 ? (
                <>
                  <p className="text-gray-700">
                    I've been a fan of Isco for some time now. Unfortunately, his future didn't look
                    promising after a poor stretch at Real Madrid. Similar to Antony, Isco found his footing
                    again at Real Betis and had a sensational 2024/2025 campaign, scoring 12 and assisting 11
                    in 33 matches, while also captaining his side to a UEFA Conference League Final.
                  </p>
                  <p className="text-gray-700">
                    Isco has some of the best footwork and dribbling I've ever seen. His control in tight spaces
                    is unbelievable to watch. It feels like he's going to dribble out of any pressure. It doesn't
                    matter if Isco is hugging the sideline and surrounded by three defenders, he will find a way out.
                  </p>
                  <p className="text-gray-700">
                    Isco is also a very unselfish player who consistently makes the right play, which I appreciate.
                    Isco is your favorite player's favorite player.
                  </p>
                </>
              ) : p.n === 6 ? (
                <>
                  <p className="text-gray-700">
                    To be honest, I didn't know much about Kone before I saw him play in March 2025. At first glance,
                    he looks like a freak athlete. But then you notice that his technical skills are up there with the best.
                  </p>
                  <p className="text-gray-700">
                    Kone is so smooth on the ball and glides around the pitch. He is a very good progressive ball carrier
                    and drives forward with pace and power. He is the type of player that everyone loves to play with: a great
                    ball-winner, covers a lot of ground, drives the ball forward, and is an unselfish passer.
                  </p>
                  <p className="text-gray-700">
                    Kone has shown a lot of promise over the past year with Roma and the French national team. Don't be surprised
                    when he is a key player for France at the 2026 World Cup.
                  </p>
                </>
              ) : p.n === 5 ? (
                <>
                  <p className="text-gray-700">
                    Jamal Musiala has been talked about for years now, even though he's only 22 years old. He was labeled as a
                    future star when he was 18 years old and has truly lived up to the hype.
                  </p>
                  <p className="text-gray-700">
                    I saw Musiala play for Germany in the Nations League Quarterfinals. He played on the left wing rather than in
                    his natural number 10 role. He didn't necessarily have an outstanding performance overall, but his dribbling
                    ability and creativity in the final third still shined through.
                  </p>
                  <p className="text-gray-700">
                    Musiala is an exceptionally smooth dribbler and can beat anyone 1v1. He can also produce something out of nothing,
                    which is arguably the hardest attribute to find in modern football.
                  </p>
                </>
              ) : p.n === 4 ? (
                <>
                  <p className="text-gray-700">
                    Over the past few years I've heard great things about Nicolo Barella but hadn't watched him live very often. Seeing
                    him in an Italy kit in March 2025 changed that. I think he's the most complete midfielder I've seen to date.
                  </p>
                  <p className="text-gray-700">
                    His awareness, touch, dribbling, passing, and final-third production are all top of the line. He's also a sneaky
                    athletic player who covers the whole pitch. A true box-to-box midfielder who can do it all.
                  </p>
                  <p className="text-gray-700">
                    He delivered a very impressive performance against a strong German midfield, and I was legitimately impressed. Big
                    things ahead for Barella. Inter Milan is a top team but I expect Barella to make a move soon to a club like Barcelona
                    or Manchester City.
                  </p>
                </>
              ) : p.n === 3 ? (
                <>
                  <p className="text-gray-700">
                    I've watched Sandro Tonali play quite a bit in the Premier League with Newcastle and have always had a positive opinion
                    on him. I would have previously labeled him as a slightly above average Premier League midfielder. I'll tell you right now...
                    that is not the category he belongs in.
                  </p>
                  <p className="text-gray-700">
                    Tonali has all the tools to be one of the best midfielders in the world. He is powerful, extremely difficult to dispossess,
                    and a real threat going forward. He scored a great goal against Germany in the Nations League quarterfinals and I've seen him
                    score some spectacular goals for Newcastle.
                  </p>
                  <p className="text-gray-700">
                    In my eyes, Tonali is a top-quality engine midfielder who also shows his class on the ball and can be dangerous in front of goal.
                  </p>
                </>
              ) : p.n === 2 ? (
                <>
                  <p className="text-gray-700">
                    I'm not Vinicius Jr.'s biggest fan, by any means. I saw him play against Valencia in March 2024, and wasn't overly impressed with
                    his movement or effort. His attitude definitely needs work.
                  </p>
                  <p className="text-gray-700">
                    That said, he was getting booed, whistled at, and probably sworn at the entire match. He still managed to score two goals and be the
                    most dangerous player all game. You can't deny his talent. Vinicius can beat anyone 1v1 and score on any given night.
                  </p>
                  <p className="text-gray-700">
                    He's been a bit off so far in the 2025/2026 campaign. I think it may come down to his attitude and effort starting to outweigh his talent.
                    Hopefully, he can turn it around and get back to being one of the best players in the world.
                  </p>
                </>
              ) : p.n === 1 ? (
                <>
                  <p className="text-gray-700">
                    Don't get me started on Joshua Kimmich. One of the most underrated players of all time.
                  </p>
                  <p className="text-gray-700">
                    Is he a better number 6 or right back? I honestly don't know, but he's elite in either position. Watching Kimmich live, you get to see his full
                    influence on the game, and it goes far beyond the stat sheet.
                  </p>
                  <p className="text-gray-700">
                    I believe Kimmich is the best captain in world football and someone I would personally love to play with. His mentality, work rate, and leadership
                    are all world class. He didn't make a single mistake on the ball either!
                  </p>
                  <p className="text-gray-700">
                    This is the only time I will mention stats in this article: he had a 91% pass completion rate, created five chances from right back, and had two
                    assists in a 2-1 win. Both assists were pinpoint crosses for easy headers. Defensively, Kimmich was a menace and Italy had zero hope of creating
                    any chances down Kimmich's side.
                  </p>
                  <p className="text-gray-700">
                    If you ever have the chance to see Joshua Kimmich play live, make sure you take that opportunity and focus on him the entire match.
                  </p>
                </>
              ) : (
                <p className="text-gray-700">Write-up coming soon.</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Honorable mentions */}
      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Honorable mentions</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Moise Kean (Fiorentina)</li>
          <li>David De Gea (Fiorentina)</li>
          <li>Matias Soule (Roma)</li>
          <li>Alessandro Bastoni (Italy)</li>
          <li>Toni Kroos (Real Madrid)</li>
          <li>Eduardo Camavinga (Real Madrid)</li>
          <li>Destiny Udogie (Italy)</li>
          <li>Weston McKennie (Juventus)</li>
        </ul>
      </section>
    </div>
  );
}

