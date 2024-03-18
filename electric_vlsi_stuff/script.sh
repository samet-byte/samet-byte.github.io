######START HERE######
    #!/bin/bash

                                # Get argument from electric

    args=("$@")

                                # Create *.net file for LTspice

    cd  ~/Desktop/ELECTRIC/             

    cp ${args[0]}.spi ${args[0]}.net

                                # Launch LTspice and pass it parameters.

    cd /Applications/LTspice.app/Contents/MacOS/

    ./LTSpice ~/Desktop/ELECTRIC/${args[0]}.net ${args[1]} ~/Desktop/ELECTRIC/${args[2]} ${args[3]} ~/Desktop/ELECTRIC/${args[4]}
######END HERE######