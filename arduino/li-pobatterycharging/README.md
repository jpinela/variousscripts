# Li-Po Battery Charging

This page describes my experience charging a Li-Po battery for the first time.
The components are the following:

- Li-Po Battery Smart Charger (1-4S )
- Li-Po Battery 3 cell 11.1V 2800mAh 30C()
---

## 🚀 Preview

Here’s what the application looks like in action:

![Charger](https://github.com/jpinela/variousscripts/blob/99622afcf3d2fdb970ab6c03ad6e22e10189d2af/arduino/li-pobatterycharging/Images/IMG20250508155011.jpg)

A sleek, responsive landing page that looks great on all devices.

![Charging](https://github.com/jpinela/variousscripts/blob/9f7e736d4aaea6e7fd990e94f2849c0a14a9237a/arduino/li-pobatterycharging/Images/IMG20250508155108.jpg)

Feature-rich dashboard with charts, user controls, and real-time updates.


---

# Important Things/Informations
- each cell has 3.7V +-. so the Voltage is just NumberOFCells * 3.7
- mAh is the amount of time it can handle a load (example, if your system requests 1.4A, this fully loaded battery would hold for 2h, 2800 mAh / 1.4 A = 2 hours )
- C is the amount of possible drain. 1C = 2.8A, so 30C, means you can request a maximum of 2.8A * 30 = 84A from this battery.
- ALWAYS use a smart charger for Li-Po Batteries.
- multi-cell batteries need to be balanced. that is what that small plug is for. ALWAYS connect it first to the charger.
- Connecting them, is fairly simple. Just the balance plug 1st (the black wire on the right, it is the only way to do it), then the battery red and black, and wait for about 1-2h for charging. Read the instructions on the charger. Mine said, blinking green was ready, blinking red was charging, then changing red to green (is was a yellowish green) and then it was a constant green when fully charged. Pretty cool. And after 10 years of waiting!!!!

After this, I used it to try and power the brushless motor here.
There were several links and videos that helped me understand this. Some were:

- https://youtu.be/UahHDoQ8xLQ?si=rYPvFzUo3OQddu74
- https://www.youtube.com/watch?v=1gb8Oohhciw
- https://youtu.be/Lk7wzVYmXSA?si=ix-CYWEc5YYkOlAQ
- https://youtu.be/Lk7wzVYmXSA?si=PRcsI1WmYP2Y2R7j
- https://youtu.be/1gb8Oohhciw?si=CF19cQvh_ul2UfBz
