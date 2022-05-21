# trans-air-access-system

# Overall Description

The TransAir company manages several centres in different airports. Principally, the company is
responsible for delivering post, parcels and large packages by a plane.
Each TransAir centre is situated in an airport and has some zones. All centres require a system that
controls access to their zones and keeps track of people in each zone for security reasons. Access to
a zone is through a door, and to get through the Door an access card is required.
Each Door connects a source zone to a destination zone and works in one direction only (like a
turnstile). The employee would insert a card into a card reader at the Door, and the card information
read. The system would then check whether the card is allowed through the Door to the destination
zone.
A card is only allowed through a Door if it meets the conditions for entry. If these conditions are
met, the system opens the Door and allows access to the destination zone.

# Design Patters

I have used Factory and State design patterns in this system.
Factory pattern used in card and zone.
State pattern used in door.
