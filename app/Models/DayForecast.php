<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DayForecast extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'date',
        'maximum_temperature',
        'minimum_temperature',
        'average_temperature',
        'report_id',
        'detail_forecast',
        'detail_icon'

    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date' => 'date'
    ];

    /**
     * Get the report that owns the day forecast.
     */
    public function report(): BelongsTo
    {
        return $this->belongsTo(Report::class);
    }
}
