""" Program to visually display some NBA data using matplotlib.
    COSC480 2021 S2 Project
    Author: Samuel Love
    Date: 22 October 2021
"""

import matplotlib.pyplot as plt
import os
import pandas as pd
from datetime import datetime

TEAM_OPTIONS = ["Mavericks", "Lakers", "Knicks"]
TEAM_ERROR_MESSAGE = "Team must be Mavericks, Lakers, or Knicks"
SEASON_OPTIONS = ["Regular", "Playoff", "Both"]
SEASON_ERROR_MESSAGE = "Options are Regular, Playoff, or Both"
CONTINUE_OPTIONS = ["Y", "N"]
CONTINUE_ERROR_MESSAGE = "Options are Y or N"
STATISTIC_OPTIONS = ["3%","3 Attempts","Points"]
STATISTIC_ERROR_MESSAGE = "Options are 3%, 3 Attempts, or Points"
WELCOME_MESSAGE = "Hello. This program is designed to help visualize trends in data. The sample dataset is from the NBA which is the premier basketball league in the USA. There is data for three teams: Dallas Mavericks, Los Angeles Lakers, and New York Knicks. The data also covers three time periods: 2000, 2010, and 2020. Statistics included are: three point percentage, three point attempts, points, and win percentage. By graphing various configurations one can observe trends over time and across teams."

def prompt_team():
    """ Prompts the user for which teams they want to use.
    """
    print()
    print(f"Team options are {TEAM_OPTIONS}")
    team = input("Which team do you want to use? ")
    while team not in TEAM_OPTIONS:
        print(TEAM_ERROR_MESSAGE)
        team = input("Which team do you want to use? ")
    return team


def prompt_season():
    """ Prompts the user whether they want to use regular season, playoff, or both.
    """
    print(f"Season options are {SEASON_OPTIONS}")
    season = input("Do you want to use the regular season or playoffs or both? ")
    while season not in SEASON_OPTIONS:
        print(SEASON_ERROR_MESSAGE)
        season = input("Do you want to use the regular season or playoffs or both? ")
    return season


def statistic_wanted():
    """ Prompts the user for which statistic they want to graph.
    """
    print(f"Statistic options are {STATISTIC_OPTIONS}")
    statistic = input("Which statistic do you want to plot (x-axis) against wins (y-axis)? ")
    while statistic not in STATISTIC_OPTIONS:
        print(STATISTIC_ERROR_MESSAGE)
        statistic = input("Which statistic do you want to plot (x-axis) against wins (y-axis)? ")
    return statistic


def data_processor_team(team):
    """ Processes the data based on the team input ready for further processing.
    """
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Construct the full path to the data file
    data_file_path = os.path.join(script_dir, "ProjectData.txt")

    try:
        infile = open(data_file_path)
        lines = infile.read().splitlines()
        infile.close()

        # Log successful file read
        print(f"Successfully read data file: {data_file_path}")
        print(f"Total lines in file: {len(lines)}")

        mavericks = lines[5:8]
        lakers = lines[8:11]
        knicks = lines[11:14]

        team_data = []  # Initialize with default value
        if team == "Mavericks":
            team_data = mavericks
        elif team == "Lakers":
            team_data = lakers
        elif team == "Knicks":
            team_data = knicks

        return team_data
    except FileNotFoundError:
        print(f"Error: Data file not found at {data_file_path}")
        print("Please make sure ProjectData.txt is in the same directory as this script.")
        exit(1)


def data_processor_season(season, team_data, statistic):
    """ Processes the data based on the season input ready for plotting.
    """
    team_2020 = team_data[0]
    team_2010 = team_data[1]
    team_2000 = team_data[2]
    data_2020 = team_2020.split()
    data_2010 = team_2010.split()
    data_2000 = team_2000.split()

    # Initialize variables with default empty lists
    win = []
    three_percentage = []
    three_attempts = []
    points = []

    if season == "Regular":
        win = [data_2020[4], data_2010[4], data_2000[4]]
        three_percentage = [data_2020[7], data_2010[7], data_2000[7]]
        three_attempts = [data_2020[13], data_2010[13], data_2000[13]]
        points = [data_2020[10], data_2010[10], data_2000[10]]
    elif season == "Playoff":
        win = [data_2020[5], data_2010[5], data_2000[5]]
        three_percentage = [data_2020[8], data_2010[8], data_2000[8]]
        three_attempts = [data_2020[14], data_2010[14], data_2000[14]]
        points = [data_2020[11], data_2010[11], data_2000[11]]
    elif season == "Both":
        win = [data_2020[3], data_2010[3], data_2000[3]]
        three_percentage = [data_2020[6], data_2010[6], data_2000[6]]
        three_attempts = [data_2020[12], data_2010[12], data_2000[12]]
        points = [data_2020[9], data_2010[9], data_2000[9]]

    # Initialize processed_data with default
    processed_data = [win, three_percentage]  # Default to 3% statistic

    if statistic == "3%":
        processed_data = [win, three_percentage]
    elif statistic == "3 Attempts":
        processed_data = [win, three_attempts]
    elif statistic == "Points":
        processed_data = [win, points]

    return processed_data


def graph_results(processed_data, team, statistic, season):
    """ Visualises the results with a graph and saves it to a file.
    """
    # Create a figure with a specific size
    plt.figure(figsize=(10, 6))
    axes = plt.axes()

    xs = processed_data[1]
    ys = processed_data[0]

    # Convert string values to float
    try:
        x_values = [float(val) for val in xs]
        y_values = [float(val) for val in ys]

        # Create the scatter plot
        axes.plot(x_values[0], y_values[0], "bo", markersize=10, label="2020 season")
        axes.plot(x_values[1], y_values[1], "ro", markersize=10, label="2010 season")
        axes.plot(x_values[2], y_values[2], "go", markersize=10, label="2000 season")

        # Add data points annotation
        for i, (x, y) in enumerate(zip(x_values, y_values)):
            year = 2020 - i * 10
            axes.annotate(f"{year}: ({x}, {y})",
                         (x, y),
                         textcoords="offset points",
                         xytext=(0, 10),
                         ha='center')

        # Set appropriate axis limits
        x_min = min(x_values) * 0.9
        x_max = max(x_values) * 1.1
        y_min = min(y_values) * 0.9
        y_max = max(y_values) * 1.1

        axes.set_xlim(x_min, x_max)
        axes.set_ylim(y_min, y_max)

        # Set up legend and labels
        axes.legend(loc='best')

        # Add grid with better visibility
        axes.grid(True, linestyle='--', alpha=0.7)

        # Better title and labels
        axes.set_title(f"Scatterplot of Win % vs {statistic} for the {team}\n({season} Season Data: 2000, 2010, and 2020)", fontsize=14)
        axes.set_xlabel(f"{statistic}", fontsize=12)
        axes.set_ylabel("Win %", fontsize=12)

        # Add timestamp to the corner
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        plt.figtext(0.01, 0.01, f"Generated: {timestamp}", fontsize=8)

        # Save the figure to a file
        filename = f"{team}_{statistic}_{season}_{timestamp.replace(' ', '_').replace(':', '-')}.png"
        plt.savefig(filename, dpi=300, bbox_inches='tight')
        print(f"Graph saved as: {filename}")

        # Show the plot
        plt.show()

    except ValueError as e:
        print(f"Error plotting data: {e}")
        print(f"Data received - X values: {xs}, Y values: {ys}")


def prompt_continue():
    """ Prompts the user whether they want to add more stats to the graph.
    """
    print(f"Continue options are {CONTINUE_OPTIONS}")
    continued = input("Do you want to repeat the process? ")
    if continued not in CONTINUE_OPTIONS:
        print(CONTINUE_ERROR_MESSAGE)
        continued = input("Do you want to repeat the process? ")
    return continued


def export_to_csv(team, season, statistic, processed_data):
    """Export the processed data to a CSV file for further analysis."""
    try:
        # Create a DataFrame
        years = [2020, 2010, 2000]
        win_percentages = [float(val) for val in processed_data[0]]
        stat_values = [float(val) for val in processed_data[1]]

        data = {
            'Year': years,
            'Win_Percentage': win_percentages,
            statistic.replace(' ', '_').replace('%', 'Pct'): stat_values
        }

        df = pd.DataFrame(data)

        # Generate filename
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{team}_{season}_{statistic.replace(' ', '_').replace('%', 'Pct')}_{timestamp}.csv"

        # Save to CSV
        df.to_csv(filename, index=False)
        print(f"Data exported to CSV: {filename}")
        return filename
    except Exception as e:
        print(f"Error exporting to CSV: {e}")
        return None

def display_summary_statistics(team, season, statistic, processed_data):
    """Display summary statistics for the data."""
    try:
        win_percentages = [float(val) for val in processed_data[0]]
        stat_values = [float(val) for val in processed_data[1]]

        print("\n" + "="*50)
        print(f"SUMMARY STATISTICS FOR {team.upper()} ({season} SEASON)")
        print("="*50)

        # Win percentage stats
        print("Win Percentage:")
        print(f"  2020: {win_percentages[0]:.2f}%")
        print(f"  2010: {win_percentages[1]:.2f}%")
        print(f"  2000: {win_percentages[2]:.2f}%")
        print(f"  Average: {sum(win_percentages)/len(win_percentages):.2f}%")
        print(f"  Change 2000 to 2020: {win_percentages[0] - win_percentages[2]:+.2f}%")

        # Statistic stats
        print(f"\n{statistic}:")
        print(f"  2020: {stat_values[0]:.2f}")
        print(f"  2010: {stat_values[1]:.2f}")
        print(f"  2000: {stat_values[2]:.2f}")
        print(f"  Average: {sum(stat_values)/len(stat_values):.2f}")
        print(f"  Change 2000 to 2020: {stat_values[0] - stat_values[2]:+.2f}")

        print("="*50)
    except Exception as e:
        print(f"Error calculating summary statistics: {e}")

def main():
    """ Collects and calls all the sub functions.
    """
    print("\n" + "="*50)
    print(WELCOME_MESSAGE)
    print("="*50 + "\n")

    # Track start time
    start_time = datetime.now()
    print(f"Session started at: {start_time.strftime('%Y-%m-%d %H:%M:%S')}\n")

    running = True
    while running:
        team = prompt_team()
        season = prompt_season()
        statistic = statistic_wanted()

        # Process data
        print("\nProcessing data...")
        team_data = data_processor_team(team)
        processed_data = data_processor_season(season, team_data, statistic)

        # Display summary statistics
        display_summary_statistics(team, season, statistic, processed_data)

        # Export data to CSV
        export_to_csv(team, season, statistic, processed_data)

        # Visualize results
        print("\nGenerating visualization...")
        graph_results(processed_data, team, statistic, season)

        # Prompt to continue
        continued = prompt_continue()
        if continued != "Y":
            running = False

    # Display session summary
    end_time = datetime.now()
    duration = end_time - start_time
    print("\n" + "="*50)
    print(f"Session ended at: {end_time.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Total session duration: {duration.total_seconds():.2f} seconds")
    print("Thank you for using the NBA Data Visualization tool!")
    print("="*50 + "\n")

if __name__ == "__main__":
    main()
