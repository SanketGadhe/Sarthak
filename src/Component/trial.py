import os

# Directory path
directory = './static/PortraitVideo/Long_Words'

# List to store words
words = []

# Iterate over files in the directory
for filename in os.listdir(directory):
    # Check if the file is a regular file
    if os.path.isfile(os.path.join(directory, filename)):
        # Extract word from the filename (assuming the filename contains the word)
        word = os.path.splitext(filename)[0]  # Remove file extension
        words.append(word)

# Print the list of words
print(words)
