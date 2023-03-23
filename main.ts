basic.showString("MATCH GAME!!!")

patterns = [
        Ima
    0000")
        Image("90909:"
          "90909:"
          "90909:"
          "90909:"
          "90909"),
        Image("00000:"
          "09990:"
          "09990:"
          "09990:"
          "00000"),
    ]

# Initialize the game
player_one_score = 0
player_two_score = 0
game_over = False

# Main game loop
while not game_over:
    # Choose a random pattern
pattern_index = random.randint(0, len(patterns) - 1)
pattern = patterns[pattern_index]
    
    # Show the pattern on both screens
display.show(pattern)
sleep(1000)
display.clear()
    
    # Wait for player one to press their button
while True:
    if button_a.was_pressed():
        player_one_pressed = True
break
elif button_b.was_pressed():
player_one_pressed = False
break
            
    # Wait for player two to press their button
while True:
    if button_a.was_pressed():
        player_two_pressed = True
break
elif button_b.was_pressed():
player_two_pressed = False
break
            
    # Check if the players pressed at the same time
if player_one_pressed == player_two_pressed:
    continue
        
    # Determine the winner of the round
if player_one_pressed:
    winner = 1
player_one_score += 1
    else:
winner = 2
player_two_score += 1
        
    # Show the winner on both screens
display.show(str(winner))
sleep(1000)
display.clear()
    
    # Check if either player has won the game
if player_one_score >= 5 or player_two_score >= 5:
game_over = True
        
# Show the final scores on both screens
display.show("P1:" + str(player_one_score) + " P2:" + str(player_two_score))
{
    "terminal.integrated.sendKeybindingsToShell": true
}