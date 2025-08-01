# NBA Data Visualization Portfolio Project

![NBA Logo](https://cdn.nba.com/logos/nba/nba-logoman-75-word_white.svg)

## Project Overview

This project demonstrates data visualization techniques using Python to analyze NBA basketball statistics. The application processes historical data from three NBA teams (Dallas Mavericks, Los Angeles Lakers, and New York Knicks) across three time periods (2000, 2010, 2020), allowing users to explore relationships between performance metrics and win percentages.

### Demo Video

[![NBA Data Visualization Demo](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID)

*Click the image above to watch the demo video*

## Key Features

- **Interactive Data Selection:** Users can choose from multiple teams, seasons (regular/playoff/both), and statistics
- **Dynamic Visualization:** Generates scatter plots showing the relationship between selected statistics and win percentages
- **Data Export:** Automatically saves visualizations as high-resolution PNG files and exports data to CSV for further analysis
- **Statistical Summary:** Provides detailed statistical analysis including averages and changes over time
- **User-Friendly Interface:** Intuitive command-line interface with clear prompts and error handling

## Technical Skills Demonstrated

- **Python Programming:** Object-oriented design, error handling, and functional decomposition
- **Data Analysis:** Statistical calculations, data transformation, and interpretation
- **Data Visualization:** Creating informative and visually appealing charts with matplotlib
- **File I/O Operations:** Reading from structured text files and writing to various formats
- **User Interface Design:** Creating an intuitive command-line experience

## Sample Visualizations

### Win Percentage vs. 3-Point Percentage (Mavericks, Regular Season)
![Mavericks 3PT Sample](./visualizations/mavericks_3pt_regular_sample.png)

### Win Percentage vs. Points (Lakers, Playoff Season)
![Lakers Points Sample](./visualizations/lakers_points_playoff_sample.png)

### Win Percentage vs. 3-Point Attempts (Knicks, Both Seasons)
![Knicks 3PT Attempts Sample](./visualizations/knicks_3pt_attempts_both_sample.png)

## Project Structure

```
NBA-Data-Visualization/
├── src/
│   ├── nba_visualizer.py (main application)
│   └── utils/
│       └── data_processing.py (data processing utilities)
├── data/
│   ├── nba_stats.txt (original dataset)
│   └── processed/
│       └── (exported CSV files)
├── visualizations/
│   └── (generated visualization images)
├── docs/
│   ├── project_report.pdf
│   └── data_dictionary.md
└── requirements.txt
```

## Dependencies

- Python 3.8+
- NumPy
- Matplotlib
- Pandas

## How to Run

1. Clone this repository
2. Install dependencies: `pip install -r requirements.txt`
3. Navigate to the src directory: `cd src`
4. Run the application: `python nba_visualizer.py`
5. Follow the interactive prompts to select data and generate visualizations

## Future Enhancements

- Web-based interface with interactive dashboard
- Expanded dataset covering more teams and seasons
- Machine learning integration to predict performance metrics
- Time-series analysis of team performance evolution

## About This Project

This project was developed as part of COSC480 coursework and expanded into a portfolio piece demonstrating data visualization and analysis skills. The enhanced version includes additional features beyond the original assignment requirements to showcase software engineering capabilities.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or collaboration opportunities:

- Email: your.email@example.com
- LinkedIn: [Your Name](https://www.linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)