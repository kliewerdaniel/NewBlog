#!/usr/bin/env python3
"""
Script to analyze category distribution and generate sorted category list.
"""

import os
import re
from pathlib import Path
from collections import Counter

def analyze_category_distribution():
    """Analyze how many posts are in each category."""
    blog_dir = 'content/blog'
    category_counts = Counter()

    # Find all markdown files in the blog directory
    for md_file in Path(blog_dir).glob('*.md'):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            # Find categories line
            categories_match = re.search(r'categories:\s*\[(.*?)\]', content, re.DOTALL)

            if categories_match:
                categories_str = categories_match.group(1)
                # Extract individual categories
                categories = [cat.strip(' "\'') for cat in categories_str.split(',')]

                # Count each category
                for category in categories:
                    if category.strip():  # Skip empty categories
                        category_counts[category] += 1

        except Exception as e:
            print(f"Error processing {md_file}: {e}")

    return category_counts

def generate_sorted_categories():
    """Generate categories sorted by post count (descending)."""
    category_counts = analyze_category_distribution()

    # Sort by count (descending) and then alphabetically for ties
    sorted_categories = sorted(
        category_counts.items(),
        key=lambda x: (-x[1], x[0])  # Negative count for descending, then alphabetical
    )

    print("Category Distribution (sorted by popularity):")
    print("=" * 50)
    for category, count in sorted_categories:
        print(f"{category:25} | {count:3} posts")

    print(f"\nTotal categories: {len(sorted_categories)}")
    print(f"Total posts analyzed: {sum(category_counts.values())}")

    return sorted_categories

if __name__ == "__main__":
    print("Analyzing category distribution...")
    sorted_categories = generate_sorted_categories()

    # Generate the sorted category list for the filter component
    print("\nSorted category list for BlogFilter.tsx:")
    print("=" * 50)
    for category, count in sorted_categories:
        print(f'  "{category}", // {count} posts')
